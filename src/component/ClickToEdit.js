import React from 'react'

function ClickToEdit() {
  return (
    <section className="ClickToEdit">
      <h1 className="title">ClickToEdit</h1>

      <div className="clicktoedit-wrapper">
        <form className="clicktoedit-form">
          <div className="input-name">
            <label className="name-label" htmlFor="user-name">
              이름
            </label>
            <input
              id="user-name"
              className="name-input"
              type="text"
              minLength={2} // NOTE: 이름의 기재문자 수의 제한 예외 사항으로 인해 maxLength 대신 minLength를 적용함(https://bit.ly/생활법령정보_이름관련준수사항)
              required
            />
          </div>

          <div className="input-age">
            <label className="age-label" htmlFor="user-age">
              나이
            </label>
            <input
              id="user-age"
              className="age-input"
              type="text"
              maxLength={3}
              required
            />
          </div>
        </form>

        <div className="clicktoedit-results">
          <div className="result-name">
            <p className="name-title">이름</p>
            <p className="name-binded">최코딩</p>
          </div>

          <div className="result-age">
            <p className="age-title">나이</p>
            <p className="age-binded">55 </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClickToEdit
