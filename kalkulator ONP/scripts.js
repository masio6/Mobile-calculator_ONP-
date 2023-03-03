var box = document.getElementById('display');
var box2 = document.getElementById('display2');
var box3 = document.getElementById('display3');
var sw1 = document.getElementById('1sw');
var sw2 = document.getElementById('2sw');
const tab = [];
var box4 = document.getElementById('rozk');
var box5 = document.getElementById('rozk1');
var box4a = document.getElementById('rozk2');
var box5b = document.getElementById('rozk3');
var czym = new Boolean(true);
var czye = new Boolean(false);

function addtoscreen(x) {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (czym == false) {
		add();
		odswiez();
		czym = true;
		box.value = "";
	}

	if (x == 'c') {
		box.value = '';
	} else {
		if (box.value < Number.MAX_SAFE_INTEGER) {
			box.value += x;
			x = box.value;
		} else {
			box.value = "za duza liczba";
			czye = true;
		}
	}
}

function swap() {
	if (tab.length > 1) {
		var t = tab[tab.length - 1];
		tab[tab.length - 1] = tab[tab.length - 2];
		tab[tab.length - 2] = t;
	}

	odswiez();


}

function czyscstos() {
	tab.length = 0;

	odswiez();
	box.value = "";

}

function TestPierwsza(p) {
	var r = Math.sqrt(p);
	var i = 2;
	if (p == 2)
		return 1;
	while (i <= r) {

		if (p % i == 0)
			return 0;
		i++;
	}
	return 1;
}

function rozklad() {
	var n = tab[tab.length - 1];
	var k = 2;

	var dzial = ' \\[' + n + '=';

	while (n > 1) {
		if (TestPierwsza(k)) {

			var l = 0;
			while (n % k == 0) //dopóki liczba jest podzielna przez k
			{
				l++;
				n /= k;
			}
			if (l > 0) {
				if (l > 1)
					dzial += k + "^" + l;
				else
					dzial += k;
				if (n > 1)
					dzial += "*";

				l = 0;
			}
		}

		++k;

	}
	dzial += '\\]';
	if (tab.length > 0) {
		box4.innerHTML = dzial;
		box4a.innerHTML=dzial;
		MathJax.typeset();
	} else {
		box4.innerHTML = "";
		box4a.innerHTML = "";
	}
}



function suma() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();

	if (tab.length > 1) {


		var x = eval(tab[tab.length - 1]) + eval(tab[tab.length - 2]);

		tab.pop();
		tab.pop();
		odswiez();

		console.log(x, Number.MAX_SAFE_INTEGER, x < Number.MAX_SAFE_INTEGER)
		if (x < Number.MAX_SAFE_INTEGER) {
			box.value = x;
			czym = false;
		} else {
			box.value = "eror za duży wynik";
			czye = true;

		}
	}
}

function iloraz() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();
	if (tab.length > 1) {

		if (eval(tab[tab.length - 1]) != 0) {
			x = eval(Math.round(tab[tab.length - 2] / tab[tab.length - 1] - 0.5));
		} else {
			x = "nie dziel przez 0!";
			czye = true;
		}

		tab.pop();
		tab.pop();

		box.value = x;
		odswiez();
		czym = false;
	}
}

function rozkladparz() {
	x = eval(tab[tab.length - 1]);
	var res = " \\[ ";

	if (x % 2 == 0 && x >= 4) {
		for (let i = 2; i < x; i++) {
			if (TestPierwsza(i) && TestPierwsza(x - i)) {
				res += x;
				res += '=';
				res += i;
				res += '+';
				res += x - i;
				res += '\\]';


				box5.innerHTML = res;
				box5b.innerHTML=res; 
				MathJax.typeset();
				break;
			}
		}
	} else
	{box5.innerHTML = "";
	box5b.innerHTML=""; 
	}


}

function odswiez() {

	si = tab.length;
	if (si > 0)
		box2.value = tab[si - 1];
	else
		box2.value = "";
	if (si > 1)
		box3.value = tab.at(si - 2);
	else
		box3.value = "";

	rozklad();
	rozkladparz();

}

function add() {
	x = box.value;

	if (x >= Number.MAX_VALUE) {
		box.value = "wynik jest za duży";
		czye = true;
	} else {
		if (x != "")
			tab.push(x);
		si = tab.length;
		if (si > 0)
			box2.value = tab[si - 1];
		if (si > 1)
			box3.value = tab.at(si - 2);
	}
}

function roznica() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();

	if (tab.length > 1) {

		if (eval(tab[tab.length - 2]) >= eval(tab[tab.length - 1])) {
			x = eval(tab[tab.length - 2]) - eval(tab[tab.length - 1]);
			box.value = x;
			czym = false;

		} else {
			box.value = "error wart ujemna";
			czye = true;

		}
		tab.pop();
		tab.pop();


		odswiez();

	}
}

function iloczyn() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();
	if (tab.length > 1) {

		let x = eval(tab[tab.length - 1]) * eval(tab[tab.length - 2]);
		tab.pop();
		tab.pop();
		odswiez();

		if (x < Number.MAX_SAFE_INTEGER) {
			box.value = x;
			czym = false;
		} else {
			box.value = "eror za duży wynik";
			czye = true;

		}
	}
}

function potega() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();

	if (tab.length > 1) {
		let x = Math.pow(eval(tab[tab.length - 2]), eval(tab[tab.length - 1]));
		tab.pop();
		tab.pop();
		odswiez();
		if (x < Number.MAX_SAFE_INTEGER) {
			box.value = x;
			czym = false;
		} else {
			box.value = "eror za duży wynik";
			czye = true;

		}
	}
}

function modulo() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();
	if (tab.length > 1) {

		x = eval(tab[tab.length - 2]) % eval(tab[tab.length - 1]);
		tab.pop();
		tab.pop();

		box.value = x;
		odswiez();
		czym = false;
	}
}

function gcd_two_numbers(x, y) {

	if ((typeof x !== 'number') || (typeof y !== 'number'))
		return false;
	x = Math.abs(x);
	y = Math.abs(y);
	while (y) {
		var t = y;
		y = x % y;
		x = t;
	}
	return x;
}

function gcd() {
	if (czye) {
		box.value = "";
		czye = false;
	}
	if (tab.length > 0)
		add();
	if (tab.length > 1) {

		x = gcd_two_numbers(eval(tab[tab.length - 2]), eval(tab[tab.length - 1]))

		tab.pop();
		tab.pop();

		box.value = x;
		odswiez();
		czym = false;
	}
}

function enter() {
	if (czye) {
		box.value = "";
		czye = false;
	} else {
		add();
		odswiez();
		box.value = "";
	}
}

function backspace() {
	if (czye) {
		box.value = "";
		czye = false;
	} else {
		var number = box.value;
		var len = number.length - 1;
		var newnumber = number.substring(0, len);
		box.value = newnumber;
	}
}