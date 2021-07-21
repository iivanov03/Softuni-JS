function matrix(n) {
    let result = '';
        function repeatRow(n) {
            let row = ' ';
            for (let i = 0; i < n; i++){
                row += n + ' ';
            }
            return row;
        }
        function repeatCol(n) {
            let arr = [];
            for (let i = 0; i < n; i++){
                arr.push(repeatRow(n))
                result = result + arr[i] + '\n';
            }
            return result;
        }
        return repeatCol(n);
    }