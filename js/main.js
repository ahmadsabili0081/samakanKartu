let jumlahKartu = 6;
let kartuPertama = kartuKedua = 0;
// untuk membuat angka awalan
function buatAngka(){
    let AngkaBerurut = [];

    for(let i = 1; i <= jumlahKartu; i++){
        AngkaBerurut.push(i,i);
    } 
    return AngkaBerurut;
}
// untuk mengacak sebuah angka
function acakAngka(AngkaBerurut){
    let angkaAcak = AngkaBerurut.sort(function(){
        return 0.5 - Math.random();
    });
    return angkaAcak;
}
// ini untuk memasukkan string ke html
function kartuYangDibuat(angkaAcak){
    let str = '';
    angkaAcak.forEach(function(i){
        str += '<div class="kartu" nilai= "' + i + '">' +
                '<div class="belakang">' + i +  '</div>'+ 
                '<div class="depan">Ahmad sabili</div>' + 
             '</div>';
    });
    // fungsi dari appen ini memasukkan child ke parents nya
    $('#game').append(str);
}
// kartu click
function kartuClick (){
    $('.kartu').on('click', function () {
        $(this).addClass('buka');
        // pengecekkan, jika kartu pertama bernilai  = nilai pertama..maka akan lanjut ke else
        if(kartuPertama == 0){
            // attr ini ialah maka kartupertama akan bernilai kartu yang telah diclick
            kartuPertama = $(this).attr("nilai");
            // jika else bernilai kartu yang sama seperti pada if diawal, makan akan menjawab benar
        }else{
            kartuKedua = $(this).attr('nilai');
            if(kartuPertama == kartuKedua){
                $('.buka').addClass('benar');
                $('.benar').removeClass('.buka');
                kartuPertama = kartuKedua = 0;
                window.alert("Kamu benar kawan");
            }else{
                // jika kartu salah, makan akan kembali seprti awal
                kartuPertama = kartuKedua = 0;
                $(this).one('transitionend', function (){
                    $('.kartu').removeClass('buka')
                });
            }
        }
    });
}
// untuk menjalankan script ketika sudah loading
$(document).ready(function () {
    let AngkaBerurut = buatAngka();
    let angkaAcak = acakAngka(AngkaBerurut);
    kartuYangDibuat(angkaAcak);
    kartuClick();
});