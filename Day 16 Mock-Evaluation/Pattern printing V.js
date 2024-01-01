function patternPrintingV(N) {
    for (let i = 0; i < N; i++) {
        let str = "";
        for (p = N - i; p > 0; p--) {

            if (p == 1) {

                str += "*";
                break;
            }

            str += "*" + " ";

        }

        for (let k = 0; k < i; k++) {
            str += "  ";
        }
        console.log(str);
    }
}

patternPrintingV(4)