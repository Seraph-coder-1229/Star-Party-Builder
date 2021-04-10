const templates = {
  select: generateSelect,
  options1: `
                <option value=""></option>
                <option value="Buyer">Buyer</option>
                <option value="PLD">PLD</option>
                <option value="RUN">RUN</option>
                <option value="WHM">WHM</option>
                <option value="RDM">RDM</option>
                <option value="SCH">SCH</option>
                <option value="COR">COR</option>
                <option value="BRD">BRD</option>
                <option value="GEO">GEO</option>
                <option value="DNC">DNC</option>
                <option value="SAM">SAM</option>
                <option value="DRK">DRK</option>
                <option value="WAR">WAR</option>
                <option value="MNK">MNK</option>
                <option value="DRG">DRG</option>
                <option value="BLU">BLU</option>
                <option value="BST">BST</option>
                <option value="RNG">RNG</option>
                <option value="NIN">NIN</option>
                <option value="THF">THF</option>
                <option value="BLM">BLM</option>
                <option value="SMN">SMN</option>
                <option value="PUP">PUP</option>
  `,
};

function generateSelect(id, r, c) {
  return ` <select class=" form-select border-0 w-100 h-100" id=${id} data-row = ${r} data-column=${c} data-type="" >
                
        </select>`;
}

export { templates };
