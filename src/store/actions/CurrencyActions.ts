const ActionTypes = {
  UPDATE_CURRENCY: "[Currency] Update Currency",
};

const updateCurrency = (code: string) => {
  return {
    type: ActionTypes.UPDATE_CURRENCY, // required
    payload: code, // payload
  };
};

const CurrencyActions = { updateCurrency, ActionTypes };
export default CurrencyActions;
