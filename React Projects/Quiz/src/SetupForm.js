import React from "react";
import { useGlobalContext } from "./context";
const SetupForm = () => {
  const { error, quiz, handelChange, handelSubmit } = useGlobalContext();
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Setup quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              id='amount'
              name='amount'
              value={quiz.amount}
              onChange={handelChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              value={quiz.category}
              className='form-input'
              onChange={handelChange}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              value={quiz.difficulty}
              className='form-input'
              onChange={handelChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handelSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
