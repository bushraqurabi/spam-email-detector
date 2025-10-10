import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { checkSpamEmail } from '../../services/api';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';
import type { SpamCheckResponse } from '../../types';
import './Home.scss';

interface FormValues {
  email: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email content is required')
    .min(10, 'Email content must be at least 10 characters'),
});

const Home = () => {
  const [result, setResult] = useState<SpamCheckResponse | null>(null);

  const mutation = useMutation({
    mutationFn: checkSpamEmail,
    onSuccess: (data: SpamCheckResponse) => {
      setResult(data);
    },
    onError: (error: Error) => {
      console.error('Error checking email:', error);
      alert('Failed to check email. Please make sure the API is running.');
    },
  });

  const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setResult(null);
    mutation.mutate(values.email);
    setSubmitting(false);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">
            Spam Email Detector
          </h1>
          <p className="hero-subtitle">
            Protect yourself from spam with our advanced AI-powered detection system
          </p>
        </div>

        <div className="form-section">
          <div className="form-card">
            <div className="form-header">
              <h2 className="form-title">Check Your Email</h2>
              <p className="form-description">
                Paste the email content below to analyze if it's spam or legitimate
              </p>
            </div>

            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="email-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Content
                    </label>
                    <Field
                      as="textarea"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="Paste your email content here..."
                      rows={8}
                      disabled={mutation.isPending}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="form-error"
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting || mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <span className="spinner"></span>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <span className="button-icon">🔍</span>
                        Check Email
                      </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {result && (
          <div className="result-section">
            <ResultDisplay result={result} />
          </div>
        )}

        <div className="features-section">
          <h2 className="features-title">Why Choose SpamGuard?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Get instant results with our optimized detection algorithm
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">High Accuracy</h3>
              <p className="feature-description">
                Advanced AI models ensure precise spam detection
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Private</h3>
              <p className="feature-description">
                Your data is processed securely and never stored
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
