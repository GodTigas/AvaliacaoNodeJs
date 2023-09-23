const ServiceCalculadora = require("../services/exercicios.js");

const service = new ServiceCalculadora();
class ControllerCalculadora {
  Calculadora(req, res) {
    res.json({
      message:
        "Esta Calculadora possui 4 funções: Somar, Subtrair, Multiplicar e Dividir.",
    });
  }
  Somar(req, res) {
    try {
      const result = service.Somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Deu erro" });
    }
  }
  Subtrair(req, res) {
    try {
      const result = service.Subtrair(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Deu erro" });
    }
  }
  Multiplicar(req, res) {
    try {
      const result = service.Multiplicar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Deu erro" });
    }
  }
  Dividir(req, res) {
    try {
      const result = service.Dividir(req.body.num1, req.body.num2);

      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Deu Erro" });
    }
  }
}

module.exports = ControllerCalculadora;
