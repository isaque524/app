import ModelError from "/ModelError.js";

export default class Produto {
    
  //
  // DECLARAÇÃO DE ATRIBUTOS PRIVADOS: Em JavaScript, se o nome do atributo tem # no início, isso 
  // indica que ele é privado. Também deve-se colocar a presença dele destacada, como está abaixo.
  //
  #comercial;
  #cientifico;
  #laboratorio;
  #quantidade;
  #seletor;

  //-----------------------------------------------------------------------------------------//

  constructor(comercial, cientifico, laboratorio, quantidade, seletor) {
    this.setcomercial(comercial);
    this.setcientifico(cientifico);
    this.setlaboratorio(laboratorio);
    this.setquantidade(quantidade);
    this.setseletor(seletor);      
  }
  
  //-----------------------------------------------------------------------------------------//

  getcormercial() {
    return this.#comercial;
  }
  
  //-----------------------------------------------------------------------------------------//

  setcomercial(comercial) {
    if(!Produto.validarcomecial(comercial))
      throw new ModelError("Nome Comercial Inválido: " + comercial);
    this.#comercial = cormercial;
  }
  
  //-----------------------------------------------------------------------------------------//

  getcientifico() {
    return this.#cientifico;
  }
  
  //-----------------------------------------------------------------------------------------//

  setcientifico(cientifico) {
    if(!Produto.validarcientifico(cientifico))
      throw new ModelError("Nome Cientifico Inválido: " + laboratorio);
    this.#cientifico = cientifico;
  }
  
  //-----------------------------------------------------------------------------------------//

  getlaboratorio() {
    return this.#laboratorio;
  }
  
  //-----------------------------------------------------------------------------------------//

  setlaboratorio(laboratorio) {
    if(!Produto.validarlaboratorio(laboratorio))
      throw new ModelError("Laboratorio Inválido: " + nome);
    this.#laboratorio = laboratorio;
  }
  
  //-----------------------------------------------------------------------------------------//

  getquanidade() {
    return this.#quantidade;
  }
  
  //-----------------------------------------------------------------------------------------//

  setquantidade(quantidade) {
    if(!Produto.validarquantidade(quantidade))
      throw new ModelError("Quantidade inválido: " + quantidade);
    this.#quantidade = quantidade;
  }
  
  //-----------------------------------------------------------------------------------------//

  getseletor() {
    return this.#seletor;
  }
  
  //-----------------------------------------------------------------------------------------//

  setseletor(seletor) {
    if(!Produto.validarseletor(seletor))
      throw new ModelError("seletor inválido: " + seletor);
    this.#seletor = seletor;
  }
  
  //-----------------------------------------------------------------------------------------//

  toJSON() {
    return '{' +
               '"comercial" : "'+ this.#comercial + '",' +
               '"cientifico" :  "'     + this.#cientifico       + '",' +
               '"laboratorio" : "'     + this.#laboratorio      + '",' +
               '"quantidade" : "'    + this.#quantidade     + '",' +
               '"seletor" : "' + this.#seletor  + '" ' + 
           '}';  
  }
  
  //-----------------------------------------------------------------------------------------//

  static assign(obj) {
    return new Produto(obj.comercial, obj.cientifico, obj.laboratorio, obj.quantidade, obj.seletor);
  }

  //-----------------------------------------------------------------------------------------//
  
  static deassign(obj) { 
    return JSON.parse(obj.toJSON());
  }

  //-----------------------------------------------------------------------------------------//

  static validarcomercial(comercial) {
    if(comercial == null || comercial == "" || comercial == undefined)
      return false;
      if (comercial.length > 40) 
      return false;
    const padraoNome = /[A-Z][a-z] */;
    if (!padraoNome.test(comercial)) 
      return false;
    return true;
  }

  //-----------------------------------------------------------------------------------------//

  static validarcientifico(cientifico) {
    if(cientifico == null || cientifico == "" || cientifico == undefined)
    return false;
  if (cientifico.length > 40) 
    return false;
  const padraocientifico = /[A-Z][a-z] */;
  if (!padraocientifico.test(cientifico)) 
    return false;
  return true;

  }

  //-----------------------------------------------------------------------------------------//

  static validarlaboratorio(laboratorio) {
    if(laboratorio == null || laboratorio == "" || laboratorio == undefined)
      return false;
    if (laboratorio.length > 40) 
      return false;
    const padraolaboratorio = /[A-Z][a-z] */;
    if (!padraolaboratorio.test(laboratorio)) 
      return false;
    return true;
  }

  //-----------------------------------------------------------------------------------------//

  static validarquantidade(quantidade) {
    if(quantidade == null || quantidade == "" || quantidade == undefined)
      return false;
  }

  //-----------------------------------------------------------------------------------------//

  static validarseletor(seletor) {
    if(seletor== null || seletor == "" || seletor == undefined)
      return false;
  }

  //-----------------------------------------------------------------------------------------//
   
  mostrar() {
    let texto = "comercial: " + this.#comercial + "\n";
    texto += "cientifico: " + this.#cientifico + "\n";
      
    alert(texto);
    alert(JSON.stringify(this));
  }
}