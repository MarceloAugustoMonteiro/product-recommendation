import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
        Recomendador de Produtos RD Station
      </h1>
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-4xl">
        <p className="text-base md:text-lg mb-6 text-gray-600">
          Bem-vindo ao Recomendador de Produtos RD Station. Selecione suas preferências e funcionalidades desejadas para receber recomendações personalizadas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Form onRecommendations={setRecommendations} />
          </div>
          <div>
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
