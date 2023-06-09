import type { NumberLike } from "../../types";

import { getHardhatProvider, toRpcQuantity, toBigInt } from "../../utils";
import { mine } from "../mine";

/**
 * Mines a new block whose timestamp is `timestamp`
 *
 * @param timestamp Must be bigger than the latest block's timestamp
 */
export async function increaseTo(timestamp: NumberLike): Promise<void> {
  const provider = await getHardhatProvider();

  const normalizedTimestamp = toBigInt(timestamp);

  await provider.request({
    method: "evm_setNextBlockTimestamp",
    params: [toRpcQuantity(normalizedTimestamp)],
  });

  await mine();
}
