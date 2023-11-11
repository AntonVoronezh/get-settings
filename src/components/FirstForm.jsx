import React from "react";

const FirstForm = ({setFormData, setIsFormEmpty}) => {
  const onButtonClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formDataObj = [];
    data.forEach((value, key) => {
      formDataObj.push(`#${key}#${value}#`)
    });

    const res = formDataObj.join('\n')
    setFormData(res)
    setIsFormEmpty(false)
  };

  return (
    <form
      className="main__form form"
      id="telegramForm"
      onSubmit={onButtonClickHandler}
    >
      <div className="form__header">
        <div className="form__header-line"></div>
        <h3 className="form__title">1. Задание для фильтрации каналов</h3>
        <div className="form__header-line"></div>
      </div>



      <div className="form__inputs">
        <div className="pole">
          <p>Сохранять скриншоты</p>
          <div style={{flex:1}}></div>
          <div className="radio">
            <input
                className="custom-radio"
                type="radio"
                id="save_screenshot_enable_setting_1"
                name="save_screenshot_enable_setting"
                value="False"
                defaultChecked={true}
            />
            <label htmlFor="save_screenshot_enable_setting_1">Нет</label>
          </div>
          <div className="radio">
            <input
                className="custom-radio"
                type="radio"
                id="save_screenshot_enable_setting_2"
                name="save_screenshot_enable_setting"
                value="True"
            />
            <label htmlFor="save_screenshot_enable_setting_2">Да</label>
          </div>
        </div>

        {/*views_post_from*/}
        <div className="pole">
          <p>Просмотров на пост от</p>
          <input
            className="form__input"
            type="number"
            name="views_post_from"
            id="views_post_from"
            autoComplete="off"
            required
          />
        </div>

        {/*views_post_to*/}
        <div className="pole">
          <p>Просмотров на пост до</p>
          <input
            className="form__input"
            type="number"
            name="views_post_to"
            id="views_post_to"
            autoComplete="off"
            required
          />
        </div>

        {/*mentions_week_from*/}
        <div className="pole">
          <p>Упоминаний за неделю</p>
          <input
            className="form__input"
            type="number"
            name="mentions_week_from"
            id="mentions_week_from"
            autoComplete="off"
            required
          />
        </div>

        {/*er_from*/}
        <div className="pole">
          <p>ER от, %</p>
          <input
            className="form__input"
            type="number"
              name="er_from"
            id="er_from"
            autoComplete="off"
            required
          />
        </div>

        {/*er_to*/}
        <div className="pole">
          <p>ER до, %</p>
          <input
            className="form__input"
            type="number"
            name="er_to"
            id="er_to"
            autoComplete="off"
            required
          />
        </div>

        {/*title*/}
        <div className="pole">
          <p>
            Слова или фразы для названия канала <br /> через запятую
          </p>
          <input
            className="form__input big"
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            required
          />
        </div>

        {/*about*/}
        <div className="pole">
          <p>
            Слова или фразы для описания канала <br /> через запятую
          </p>
          <input
            className="form__input big"
            type="text"
            name="about"
            id="about"
            autoComplete="off"
            required
          />
        </div>
      </div>

      <div className="form__buttons">
        <button className="form__button form__submit" type="submit">
          Запомнить
        </button>
      </div>
    </form>
  );
};

export default FirstForm;
