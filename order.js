class Order{
    constructor(Id,Durum,Adi,Kodu,FirmaId, YetkiliAdi){
        this.Id = Id; 
        this.Durum = Durum; 
        this.Adi = Adi;
        this.Kodu = Kodu;
        this.FirmaId = FirmaId; 
        this.YetkiliAdi = YetkiliAdi; 
    }
}

module.exports = Order;
