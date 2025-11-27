import { useDispatch, useSelector } from 'react-redux';
import { setHeight, setGender, calculateIdealWeight } from '../store/calculatorSlice';
import { User } from 'lucide-react';

function Calculator() {
  const dispatch = useDispatch();
  const { height, gender, idealWeight, error } = useSelector((state) => state.calculator);

  const handleCalculate = () => {
    dispatch(calculateIdealWeight());
  };

  const handleHeightChange = (e) => {
    dispatch(setHeight(e.target.value));
  };

  const handleGenderChange = (selectedGender) => {
    dispatch(setGender(selectedGender));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-3">
          Taille en CM:
        </label>
        <input
          type="text"
          value={height}
          onChange={handleHeightChange}
          className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
          placeholder="190"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-3">
          Génre:
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => handleGenderChange('femme')}
            className={`flex-1 px-4 py-3 text-lg border-2 rounded-lg transition-all flex items-center justify-center gap-2 ${
              gender === 'femme'
                ? 'border-pink-500 bg-pink-50 text-pink-600'
                : 'border-gray-300 bg-white text-gray-700 hover:border-pink-300'
            }`}
          >
            <User className="w-5 h-5" />
            <span>femme</span>
          </button>
          <button
            onClick={() => handleGenderChange('homme')}
            className={`flex-1 px-4 py-3 text-lg border-2 rounded-lg transition-all flex items-center justify-center gap-2 ${
              gender === 'homme'
                ? 'border-cyan-500 bg-cyan-50 text-cyan-600'
                : 'border-gray-300 bg-white text-gray-700 hover:border-cyan-300'
            }`}
          >
            <User className="w-5 h-5" />
            <span>homme</span>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-3">
          Poids idéal:
        </label>
        <div className={`w-full px-4 py-3 text-lg border-2 rounded-lg ${
          error ? 'border-red-300 bg-red-50 text-red-600' : 'border-gray-300 bg-gray-50 text-gray-700'
        }`}>
          {error || (idealWeight ? `Poids idéal est: ${idealWeight}KG` : '')}
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-4 text-xl font-medium text-cyan-400 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all"
      >
        Calculer
      </button>
    </div>
  );
}

export default Calculator;
