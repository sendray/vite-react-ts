import { REACT_QUESTIONS } from "./questions/react";

function App() {
  return (
    <>
      <div className="p-8">
        <h3 className="text-lg font-bold text-black py-4">React Interview Preparation</h3>
        <p className="text-lg font-semibold text-black">
          Baiscs
        </p>
        <ul className="font-medium text-gray-500 p-4">
          {
            REACT_QUESTIONS?.map((question: string) => (
              <li className="py-2" key={question}>{question}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
