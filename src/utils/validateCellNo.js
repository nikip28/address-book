const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export default (cellNos) => {
    const invalidCellNo = cellNos
        .split(',')
        .map(cellNo => cellNo.trim())
        .filter(cellNo => re.test(cellNo) === false);

        if (invalidCellNo.length) {
            return `Invalid cell no(s): ${invalidCellNo}`;
        }

    return    
};