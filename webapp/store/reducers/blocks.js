import { ADD_BLOCK } from '../constants/blocks';

const RECENT_BLOCKS = 10;

export default (blocks = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case ADD_BLOCK: {
      const blockCount = Object.keys(newState).length;
      const newBlock = action.payload;

      newState[newBlock.height] = newBlock;
      const oldestHeight = newBlock.height - RECENT_BLOCKS;
      if (newState[oldestHeight]) {
        // if this height exists in state, remove it
        newState.delete(oldestHeight);
      }

      return newState;
    }

    default:
      return state;
  }
});
