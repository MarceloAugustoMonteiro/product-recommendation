import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && (
        <p className="text-gray-500 italic">Nenhuma recomendação encontrada.</p>
      )}

      <ul className="space-y-2">
        {recommendations.map((recommendation, index) => (
          <li
            key={index}
            className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"
          >
            <span className="font-medium text-blue-800">{recommendation.name}</span>
            {recommendation.category && (
              <span className="block text-sm text-gray-500">{recommendation.category}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
