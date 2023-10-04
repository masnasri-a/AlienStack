function formatCurrencyIDR(price: number): string {
    // Ubah nilai integer ke format mata uang
    const formattedPrice = price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR', // Ganti dengan kode mata uang yang sesuai
      minimumFractionDigits: 0, // Jumlah digit desimal
    });
  
    return formattedPrice;
  }
  
  export default formatCurrencyIDR