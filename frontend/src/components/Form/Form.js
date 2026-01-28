import React, { useState } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });
  const { getRecommendations } = useRecommendations(products);
  const [validationError, setValidationError] = useState('');

  const validateForm = () => {
    const hasSelection =
      formData.selectedPreferences.length > 0 ||
      formData.selectedFeatures.length > 0;

    const hasRecommendationType = formData.selectedRecommendationType !== '';

    if (!hasSelection) {
      return 'Selecione ao menos uma preferência ou funcionalidade.';
    }

    if (!hasRecommendationType) {
      return 'Selecione o tipo de recomendação.';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setValidationError(error);
      return;
    }

    setValidationError('');
    const recommendations = getRecommendations(formData);
    onRecommendations(recommendations);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      {validationError && (
        <p className="text-red-500 text-sm mb-4">{validationError}</p>
      )}

      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
