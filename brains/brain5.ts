import BoardValuesModel from '@/models/board-values-model';

import putRandam from '@/brains/logics/put-randam';
import putCorner from '@/brains/logics/put-corner';
import filterAroundCorner from '@/brains/logics/filter-around-corner';
import putAroundCornerNext from '@/brains/logics/put-around-corner-next';
import putAroundCenter from '@/brains/logics/put-around-center';

function askBrain5(boardValuesState: BoardValuesModel): [number, number] {
    const { blackAvailableCells, whiteAvailableCells, turn } = boardValuesState;
    console.log(turn + ": Brain5");
    if (turn === "black") {
        return _strategy(blackAvailableCells) as [number, number];
    } else {
        return _strategy(whiteAvailableCells) as [number, number];
    }
}

function _strategy(colorAvailableCells: [number, number][]) {

    // putCorner: 角に置ければ角に置く
    const corner = putCorner(colorAvailableCells);
    if (corner) {
        return corner;
    }

    // putAroundCenter: 真ん中の周りに置ける場合は真ん中の周りに置く
    const aroundCenter = putAroundCenter(colorAvailableCells);
    if (aroundCenter) {
        return aroundCenter;
    }

    // putAroundCornerNext: 角の周りの隣における場合は、角の周りの隣に置く
    const aroundCornerNext = putAroundCornerNext(colorAvailableCells);
    if (aroundCornerNext) {
        return aroundCornerNext;
    }

    // filterAroundCorner: 角の周りと角の周り以外に分ける
    const { availableAroundCornerCells, availableNotAroundCornerCells } =
        filterAroundCorner(colorAvailableCells);

    // 角の周り以外における場合は、角の周り以外に置く
    if (availableNotAroundCornerCells.length > 0) {
        return putRandam(availableNotAroundCornerCells);
    }

    // 角の周りしか置けない場合は、角の周りに置く
    return putRandam(availableAroundCornerCells);
}

export default askBrain5;