import React from "react";
import { useContactForm } from "../hooks/useContactForm";

const ThirdForm = ({ setFormData, setIsFormEmpty, result_data }) => {
  const { isSending, success, error, onSubmissingForm } = useContactForm();

  const onButtonClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formDataObj = [];
    data.forEach((value, key) => {
      formDataObj.push(`#${key}#${value}#`);
    });
    const res = formDataObj.join("\n");
    setFormData(res);
    const res_out = result_data.join("\n--------\n");
    onSubmissingForm(`${res_out}${res}`);
  };

  return (
    <form
      className="main__form form"
      id="telegramForm"
      onSubmit={onButtonClickHandler}
      // onSubmit={onSubmissingForm}
    >
      <div className="form__header">
        <div className="form__header-line"></div>
        <h3 className="form__title">3. Контактные данные заказчика</h3>
        <div className="form__header-line"></div>
      </div>

      <div className="form__inputs">
        {/*user*/}
        <div className="pole">
          <p>Ваш адрес в Телеграмме, куда прислать результат</p>
          <input
            className="form__input big"
            type="text"
            name="user"
            id="user"
            autoComplete="off"
            required
          />
        </div>
      </div>

      {!success && <div className="form__buttons">
        <button className="form__button form__submit" type="submit">
          Отправить
        </button>
      </div>
        }

      {error && (
        <div className="form__inputs error">
          <h4>Произошла ошибка, повторите попытку позже или позвоните нам..</h4>
        </div>
      )}

      {isSending && (
        <div className="form__inputs success">
          <h4>Идет отправка...</h4>
        </div>
      )}

      {success && (
        <div className="form__inputs success">
          <h4>Ваша заявка успешно отправлена!</h4>
        </div>
      )}
    </form>
  );
};

export default ThirdForm;
