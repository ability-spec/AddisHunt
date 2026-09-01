"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icon } from "@iconify/react";

const steps = [
  { number: 1, label: "Basic Info" },
  { number: 2, label: "Media" },
  { number: 3, label: "Categories" },
  { number: 4, label: "Review" },
];

export default function SubmitPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    tagline: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink-900 font-body">
      <Header />
      <main className="flex-grow w-full max-w-[var(--container-max)] mx-auto px-[var(--margin-mobile)] md:px-[var(--margin-desktop)] py-8 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-3xl flex flex-col gap-y-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-display-lg font-display text-ink-900 mb-2">Submit a Product</h1>
            <p className="text-body-lg font-body text-ink-500 max-w-xl mx-auto">
              Share your startup or product with the Addis Hunt community. Follow the steps below to ensure your profile is complete.
            </p>
          </div>

          {/* Stepper */}
          <div className="w-full flex items-center justify-between relative px-4">
            <div className="absolute left-0 top-4 w-full h-px bg-border -z-10"></div>
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center gap-y-2 bg-bg px-4 z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-label-lg font-display border ${
                    index + 1 < currentStep
                      ? "bg-ink-900 text-bg border-ink-900"
                      : index + 1 === currentStep
                      ? "bg-ink-900 text-bg border-ink-900"
                      : "bg-surface-50 text-ink-500 border-border"
                  }`}
                >
                  {index + 1 < currentStep ? (
                    <Icon icon="solar:check-read-linear" className="text-sm" />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`text-label-lg font-display font-bold ${
                    index + 1 <= currentStep ? "text-ink-900" : "text-ink-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="w-full bg-surface-50 border border-border rounded-xl p-6 md:p-8 flex flex-col gap-y-8 shadow-sm">
            {currentStep === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gutter)]">
                  {/* Input: Name */}
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="product_name" className="text-label-lg font-display text-ink-900">
                      Product Name <span className="text-ink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="product_name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-surface-50 border border-border text-body-lg font-body text-ink-900 px-4 py-3 focus:outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-all rounded-lg placeholder:text-ink-300"
                      placeholder="e.g., Addis Pay"
                      required
                    />
                  </div>
                  {/* Input: URL */}
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="product_url" className="text-label-lg font-display text-ink-900">
                      Website URL <span className="text-ink-500">*</span>
                    </label>
                    <input
                      type="url"
                      name="url"
                      id="product_url"
                      value={formData.url}
                      onChange={handleInputChange}
                      className="w-full bg-surface-50 border border-border text-body-lg font-body text-ink-900 px-4 py-3 focus:outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-all rounded-lg placeholder:text-ink-300"
                      placeholder="https://"
                      required
                    />
                  </div>
                </div>

                {/* Input: Tagline */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="product_tagline" className="text-label-lg font-display text-ink-900">
                    Tagline <span className="text-ink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    id="product_tagline"
                    value={formData.tagline}
                    onChange={handleInputChange}
                    maxLength={60}
                    className="w-full bg-surface-50 border border-border text-body-lg font-body text-ink-900 px-4 py-3 focus:outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-all rounded-lg placeholder:text-ink-300"
                    placeholder="Short, catchy description (max 60 chars)"
                    required
                  />
                  <p className="text-body-sm font-body text-ink-500 mt-1">
                    This appears next to your product name on the main feed.
                  </p>
                </div>

                {/* Input: Description */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="product_description" className="text-label-lg font-display text-ink-900">
                    Detailed Description
                  </label>
                  <textarea
                    name="description"
                    id="product_description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-surface-50 border border-border text-body-lg font-body text-ink-900 px-4 py-3 focus:outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-all resize-y rounded-lg placeholder:text-ink-300"
                    placeholder="What does your product do? Who is it for? Share the problem you are solving."
                  />
                </div>
              </>
            )}

            {currentStep > 1 && (
              <div className="text-center py-12 flex flex-col items-center">
                <Icon icon="solar:settings-linear" className="text-4xl text-ink-300 mb-2 block" />
                <h3 className="text-title-lg font-display text-ink-500 mb-1">Step {currentStep} coming soon</h3>
                <p className="text-body-sm font-body text-ink-400">This step is under development.</p>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-x-4 pt-6 border-t border-border mt-2">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-2.5 border border-border rounded-lg text-ink-900 text-label-lg font-display font-semibold bg-surface-50 hover:bg-surface-100 transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
                >
                  Back
                </button>
              )}
              {currentStep < steps.length ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-ink-900 text-bg rounded-lg text-label-lg font-display font-semibold hover:opacity-90 transition-opacity flex items-center gap-x-2 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
                >
                  Next Step
                  <Icon icon="solar:alt-arrow-right-linear" className="text-base" />
                </button>
              ) : (
                <button
                  className="px-6 py-2.5 bg-ink-900 text-bg rounded-lg text-label-lg font-display font-semibold hover:opacity-90 transition-opacity flex items-center gap-x-2 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
                >
                  Submit
                  <Icon icon="solar:check-circle-bold" className="text-base" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}