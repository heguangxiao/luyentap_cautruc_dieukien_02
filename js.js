function btap2() {
    let a = parseInt((prompt('Nhap so M : ')));

    let b = a * 3.2808;
    alert(a +' m = '+b+' ft.');
}
function btap1() {
    let a = parseInt(prompt('Nhap *C : ;'));
    let b = a * 9 / 5 +32;
    alert('Do *F ban can la : ' + b);
}
function btap3() {
    let a = parseInt(prompt('Nhap canh hinh vuong : '));

    let b = a * a;

    alert('dien tich hinh vuong co canh bang '+a+' la : ' +b);
}
function btap4() {
    let a = parseInt(prompt('Nhap chieu dai hinh chu nhat : '));
    let b = parseInt(prompt('Nhap chieu rong hinh chu nhat : '));

    let c = a * b;

    alert('dien tich hinh chu nhat co chieu dai '+a+' va chieu rong '+b+' la : '+c);
}
function btap5() {
    let a = parseInt(prompt('Nhap chieu dai canh thu nhat : '));
    let b = parseInt(prompt('Nhap chieu dai canh thu hai : '));

    let c = ( a * b ) / 2;

    alert('dien tich tam giac vuong co canh thu nhat bang '+a+' va canh thu hai bang     '+b+' la : '+c);
}
function btap6() {
    let a = parseInt(prompt('Nhap bien a : '));
    let b = parseInt(prompt('Nhap bien b : '));

    let c = -b/a;

    alert('voi phuong trinh '+a+'x +'+b+' = 0 thi x = '+c);
}
function btap7() {
    let a = parseInt(prompt('Nhap bien a : '));
    let b = parseInt(prompt('Nhap bien b : '));
    let c = parseInt(prompt('Nhap bien c : '));

    let d = (b*b)-(4*a*c);
    let e;
    let f;
    let g = a + b + c;
    let h = a - b + c;

    if(a==0){
        alert('bien a phai khac 0');
    }else{
        if(d<0) {
            alert('Phuong trinh vo nghiem');
        }else if(d==0){
            e = f = -b/(2*a);
            alert('phuong trinh co nghiem kep : '+e);
        }else if(d>0){
            e = (-b+Math.sqrt(d))/(2*a);
            f = (-b-Math.sqrt(d))/(2*a);
            alert('phuong trinh co nghiem x1 = '+e+' va x2 = '+f);
        }else if (g == 0){
            alert('phuong trinh co nghiem x1 = 1 va x2 = '+(c/a));
        }else if (h == 0){
            alert('phuong trinh co nghiem x1 = -1 va x2 = '+(-(c/a)));
        }
    }
}
function btap8() {
    let a = parseInt(prompt('Nhap mot so nguyen : '));

    if(a>120){
        alert('max tuoi la 120 , day khong phai la tuoi cua mot nguoi');
    } else if (a<0){
        alert('min tuoi la 0 , day khong phai la tuoi cua mot nguoi');
    } else {
        alert('You right ! Day la tuoi cua con nguoi .');
    }
}
function btap9() {
    let a = parseInt(prompt('nhap canh thu 1 : '));
    let b = parseInt(prompt('nhap canh thu 2 : '));
    let c = parseInt(prompt('nhap canh thu 3 : '));

    if(a,b,c > 0 && a+b>c && a+c>b && b+c>a) {
        alert('ok');
    } else {
        alert('ca 3 canh phai lon hon 0 va tong 2 canh phai lon hon canh con lai. ');
    }
}
function btap10() {
    let a = parseInt(prompt('nhap kWh nha ban su dung trong thang : '));
    let b;

    if(a>400){
        b = ((a-400)*2927)+(100*2834)+(100*2536)+(100*2014)+(50*1734)+(50*1678);
    }else if(a>300){
        b = ((a-300)*2834)+(100*2536)+(100*2014)+(50*1734)+(50*1678);
    }else if(a>200){
        b = ((a-200)*2536)+(100*2014)+(50*1734)+(50*1678);
    }else if(a>100){
        b = ((a-100)*2014)+(50*1734)+(50*1678);
    }else if (a>50){
        b = ((a-50)*1734)+(50*1678);
    }else {
        b = a * 1678;
    }
    alert('so tien phai dong khi dung '+a+' hWh la : '+b+' VND');
}
function btap11() {
    let a = parseInt(prompt('nhap tong thu nhap : '),'0');
    let b = parseInt(prompt('nhap cac khoan mien thue : '),'0');
    let c = parseInt(prompt('nhap cac khoan giam tru : '),'0');
    let d = parseInt(prompt('nhap cac khoan khong chiu thue : '),'0');

    let e = a - (b+c+d);

    let f = parseInt(prompt('nhap so thang trong HDLD'),'0');

    let g = prompt(' ban co cu tru khong ' , '');

    let i;

    if (g == 'YES'){
        if(f>80){
            i = e / 100 * 35 - 9850000;
        }else if(f>52){
            i = e / 100 * 30 - 5850000;
        }else if(f>32){
            i = e / 4 - 3250000;
        }else if(f>18){
            i = e / 5 - 1650000;
        }else if(f>10){
            i = e / 100 * 15 - 750000;
        }else if (f>5){
            i = e / 10 - 250000;
        }else if (f>3){
            i = e / 20;
        }else{
            i = e / 10;
        }
    } else {
        i = e / 5;
    }

    alert('thue TNCN phai nop la : '+i);
}
function btap12() {
    let a = parseInt(prompt('nhap so tien ban dau : '),'0');
    let b = parseInt(prompt('nhap so thang gui tiet kiem : '),'0');
    let c = parseFloat(prompt('nhap lai suat hang thang : '),'0');

    let d = a / 100 * c / 12 * b ;

    alert('ban  co '+(d+a)+' sau '+b+' thang gui tiet kiem');
}