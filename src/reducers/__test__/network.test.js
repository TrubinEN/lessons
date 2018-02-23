import { clearNetworkErrors, networkError } from "../../actions/network";
import network from "../network";

describe("Тест редьюсера network", () => {
  // демо данные
  const errorResponse = { response: { data: { message: "Текст ошибки!" } } };
  const errorText = new Error("Текст ошибки!");

  const reducerError = network(undefined, {
    type: clearNetworkErrors.toString(),
    payload: errorText
  });

  const reduserMessage = network(undefined, {
    type: networkError.toString(),
    payload: errorResponse
  });

  // тестирование
  it("очищают поле error, если приходит экшен clearNetworkErrors", () => {
    expect(reducerError.error).toEqual(null);
  });

  it("очищают поле message, если приходит экшен clearNetworkErrors", () => {
    expect(reducerError.message).toEqual(null);
  });

  it("наполняют данными error, если приходит экшен networkError", () => {
    expect(reduserMessage.error).toEqual(errorResponse);
  });

  it("наполняют данными message, если приходит экшен networkError", () => {
    expect(reduserMessage.message).toEqual(errorResponse.response.data.message);
  });
});
