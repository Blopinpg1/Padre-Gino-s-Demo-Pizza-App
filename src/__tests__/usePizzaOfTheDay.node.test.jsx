import { expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import createFecthMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFecthMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "callabrese",
  name: "The Callabrese Pizza",
  category: "Supreme",
  description: "Spicy and meaty goodness",
  image: "/public/pizzas/callabrese.webp",
  size: { S: 12.25, M: 16.25, L: 20.25 },
};

// function getPizzaOfTheDay() {
//   let pizza;
//   function TestComponent() {
//     pizza = usePizzaOfTheDay();
//     return null;
//   }

//   render(<TestComponent />);

//   return pizza;
// }

test("gives null when first  called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  //   const pizza = getPizzaOfTheDay();
  const { result } = renderHook(() => usePizzaOfTheDay()); //fake component calling the hook and pulling out the result
  expect(result.current).toBeNull();
});

test("to call the API and give back the pizza of the day", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(() => expect(result.current).toEqual(testPizza)); //wait for says that run this code until it works
  expect(fetchMocker).toHaveBeenCalledWith("/api/pizza-of-the-day");
});
