   let ch = setInterval("mudaFundo()", 300);
        let x = 0;

        function mudaFundo() {
            x = x + 5;
            if (x > 255) {
                clearInterval(ch);
            }
            document.getElementById('fundo').style.backgroundColor = "rgb(216, 232," + x + ")";
        }