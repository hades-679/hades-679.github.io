var code; //聲明一個變量用於存儲生成的驗證碼

		document.getElementById("code").onclick = changeImg;



		function changeImg() {

			var arrays = new Array(

				'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',

				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',

				'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',

				'u', 'v', 'w', 'x', 'y', 'z',

				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',

				'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',

				'U', 'V', 'W', 'X', 'Y', 'Z'

			);

			code = ''; //重新初始化驗證碼

			//alert(arrays.length);

			//隨機從數組中獲取四個元素組成驗證碼

			for (var i = 0; i < 4; i++) {

				//隨機獲取一個數組的下標

				var r = parseInt(Math.random() * arrays.length);

				code += arrays[r];

			}

			document.getElementById('code').innerHTML = code; //將驗證碼寫入指定區域

		}



		//效驗驗證碼(表單被提交時觸發)

		function check() {

			//獲取用戶輸入的驗證碼

			var input_code = document.getElementById('vcode').value;

			if (input_code.toLowerCase() == code.toLowerCase()) {

				//驗證碼正確(表單提交)

				return true;

			}

			alert("請輸入正確的驗證碼!");

			//驗證碼不正確,表單不允許提交

			return false;
		}