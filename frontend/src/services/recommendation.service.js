const calculateProductScore = (product, selectedPreferences = [], selectedFeatures = []) => {
  const preferenceMatches = selectedPreferences.filter(
    (pref) => product.preferences.includes(pref)
  ).length;

  const featureMatches = selectedFeatures.filter(
    (feat) => product.features.includes(feat)
  ).length;

  return preferenceMatches + featureMatches;
};

/**
 * Retorna os produtos recomendados com base nas preferências do usuário.
 * @param {Object} formData - Dados do formulário (selectedPreferences, selectedFeatures, selectedRecommendationType)
 * @param {Array} products - Lista de produtos disponíveis
 * @returns {Array} Lista de produtos recomendados
 */
const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products = []
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } = formData;

  const productsWithScore = products.map((product) => ({
    ...product,
    score: calculateProductScore(product, selectedPreferences, selectedFeatures),
  }));

  const matchedProducts = productsWithScore.filter((product) => product.score > 0);

  if (matchedProducts.length === 0) {
    return [];
  }

  if (selectedRecommendationType === 'SingleProduct') {
    const bestProduct = matchedProducts.reduce((best, current) =>
      current.score >= best.score ? current : best
    );
    return [bestProduct];
  }

  return matchedProducts;
};

export default { getRecommendations };
