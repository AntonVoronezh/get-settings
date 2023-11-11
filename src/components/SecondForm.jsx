import React from "react";

const SecondForm = ({ setFormData, setIsFormEmpty }) => {

  const onButtonClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formDataObj = [];
    data.forEach((value, key) => {
      formDataObj.push(`#${key}#${value}#`);
    });

    const res = formDataObj.join("\n");
    setFormData(res);
    setIsFormEmpty(false);
  };

  return (
    <form
      className="main__form form"
      id="telegramForm"
      onSubmit={onButtonClickHandler}
    >
      <div className="form__header">
        <div className="form__header-line"></div>
        <h3 className="form__title">2. Задание для проверки каждого канала</h3>
        <div className="form__header-line"></div>
      </div>

      <div className="form__inputs">
        <div className="pole">
          <p>Сохранять скриншоты</p>
          <div style={{ flex: 1 }}></div>
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

        {/*participants_month_plus_enable_setting*/}
        <div className="pole">
          <p>Учитывать рост подписчиков за месяц</p>
          <div style={{ flex: 1 }}></div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="participants_month_plus_enable_setting_1"
              name="participants_month_plus_enable_setting"
              value="False"
              defaultChecked={true}
            />
            <label htmlFor="participants_month_plus_enable_setting_1">
              Нет
            </label>
          </div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="participants_month_plus_enable_setting_2"
              name="participants_month_plus_enable_setting"
              value="True"
            />
            <label htmlFor="participants_month_plus_enable_setting_2">Да</label>
          </div>
        </div>

        {/*participants_week_plus_enable_setting*/}
        <div className="pole">
          <p>Учитывать рост подписчиков за неделю</p>
          <div style={{ flex: 1 }}></div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="participants_week_plus_enable_setting_1"
              name="participants_week_plus_enable_setting"
              value="False"
              defaultChecked={true}
            />
            <label htmlFor="participants_week_plus_enable_setting_1">Нет</label>
          </div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="participants_week_plus_enable_setting_2"
              name="participants_week_plus_enable_setting"
              value="True"
            />
            <label htmlFor="participants_week_plus_enable_setting_2">Да</label>
          </div>
        </div>

        {/*mentions_enable_setting*/}
        <div className="pole">
          <p>Учитывать упоминания</p>
          <div style={{ flex: 1 }}></div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="mentions_enable_setting_1"
              name="mentions_enable_setting"
              value="False"
              defaultChecked={true}
            />
            <label htmlFor="mentions_enable_setting_1">Нет</label>
          </div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="mentions_enable_setting_2"
              name="mentions_enable_setting"
              value="True"
            />
            <label htmlFor="mentions_enable_setting_2">Да</label>
          </div>
        </div>

        {/*reposts_enable_setting*/}
        <div className="pole">
          <p>Учитывать репосты</p>
          <div style={{ flex: 1 }}></div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="reposts_enable_setting_1"
              name="reposts_enable_setting"
              value="False"
              defaultChecked={true}
            />
            <label htmlFor="reposts_enable_setting_1">Нет</label>
          </div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="reposts_enable_setting_2"
              name="reposts_enable_setting"
              value="True"
            />
            <label htmlFor="reposts_enable_setting_2">Да</label>
          </div>
        </div>

        {/*user_cost_enable_setting*/}
        <div className="pole">
          <p>Учитывать цену подписчика</p>
          <div style={{ flex: 1 }}></div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="user_cost_enable_setting_1"
              name="user_cost_enable_setting"
              value="False"
              defaultChecked={true}
            />
            <label htmlFor="user_cost_enable_setting_1">Нет</label>
          </div>
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              id="user_cost_enable_setting_2"
              name="user_cost_enable_setting"
              value="True"
            />
            <label htmlFor="user_cost_enable_setting_2">Да</label>
          </div>
        </div>

        {/*mentions_count_setting*/}
        <div className="pole">
          <p>Количество упоминаний</p>
          <input
            className="form__input"
            type="number"
            name="mentions_count_setting"
            id="mentions_count_setting"
            autoComplete="off"
            required
          />
        </div>

        {/*reposts_count_setting*/}
        <div className="pole">
          <p>Количество репостов</p>
          <input
            className="form__input"
            type="number"
            name="reposts_count_setting"
            id="reposts_count_setting"
            autoComplete="off"
            required
          />
        </div>

        {/*cpm_cost_setting*/}
        <div className="pole">
          <p>СPM категории</p>
          <input
            className="form__input"
            type="number"
            name="cpm_cost_setting"
            id="cpm_cost_setting"
            autoComplete="off"
            required
          />
        </div>

        {/*user_cost_setting*/}
        <div className="pole">
          <p>Цена подписчика не ниже, руб.</p>
          <input
            className="form__input"
            type="number"
            name="user_cost_setting"
            id="user_cost_setting"
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

export default SecondForm;
