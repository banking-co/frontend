import { useState, useEffect } from "react";

export const useAcceleratingBalance = (
  targetBalance?: number,
  step: number = 1,
  initialDelay: number = 500,
  accelerationFactor: number = 0.9,
) => {
  const [currentBalance, setCurrentBalance] = useState(targetBalance || 0);

  useEffect(() => {
    if (targetBalance === undefined) return;

    let delay = initialDelay;
    let timerId: NodeJS.Timeout;

    function updateBalance() {
      setCurrentBalance((prevBalance) => {
        if (targetBalance === undefined) return prevBalance; // Если targetBalance вдруг стал undefined, возвращаем текущее значение

        let newBalance: number = prevBalance;

        if (prevBalance < targetBalance) {
          newBalance = prevBalance + step;
          if (newBalance > targetBalance) {
            newBalance = targetBalance;
          }
        } else if (prevBalance > targetBalance) {
          newBalance = prevBalance - step;
          if (newBalance < targetBalance) {
            newBalance = targetBalance;
          }
        }

        delay *= accelerationFactor;
        timerId = setTimeout(updateBalance, delay);

        return newBalance;
      });
    }

    updateBalance();

    return () => clearTimeout(timerId);
  }, [targetBalance, step, initialDelay, accelerationFactor]);

  return currentBalance;
};
