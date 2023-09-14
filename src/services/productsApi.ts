export const getProducts = async () => {
  try {
    const res = await fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    );
    const json = await res.json();
    return json;
  } catch (err) {
    console.log("ERRO!");
  }
};
