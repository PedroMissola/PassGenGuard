# PassGenGuard  - Sistema de Geração de Senhas

**PassGenGuard ** é uma ferramenta que permite gerar e verificar senhas baseadas em uma fórmula personalizada. A senha gerada é composta por informações fixas (como país, estado, cidade e data de nascimento) e alguns cálculos matemáticos simples para garantir segurança.

### 🛠️ **Como Funciona?**
Este sistema cria senhas de **8 a 16 caracteres**, baseadas em dados pessoais e um conjunto de regras matemáticas:

1. **Entradas**:
    - **País** (ex: Brasil)
    - **Estado** (ex: São Paulo)
    - **Cidade** (ex: Campinas)
    - **Data de Nascimento** (ex: 26/06/2006)
    - **Uso** (ex: número 2, para indicar o tipo de uso da senha)

2. **Cálculos**:
    - A senha é gerada usando os tamanhos dos nomes dos campos e a **data de nascimento**.
    - O último dígito da senha é baseado na **soma** e **subtração** de alguns valores numéricos.

3. **Validação**:
    - O sistema também permite verificar se uma senha gerada segue as **regras de criação**.
    - Verifica se os últimos dois dígitos correspondem corretamente aos cálculos da soma e subtração.

---

## 🔐 **Funcionalidades**

- **Geração de Senhas**: A partir de dados simples, a senha é gerada e fica pronta para uso.
- **Validação de Senha**: Permite verificar se uma senha gerada está de acordo com a fórmula.
- **Fórmula Customizável**: Você pode alterar as variáveis e adaptá-las à sua necessidade, mantendo a estrutura de segurança.

---

## 🖥️ **Como Usar**

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seuusuario/SecurePassGen.git
   cd SecurePassGen
   ```

2. **Abra o arquivo `index.html`** em seu navegador para visualizar a interface de geração e verificação de senhas.

3. **Preencha os dados**:
    - País
    - Estado
    - Cidade
    - Data de Nascimento
    - Tipo de Uso

4. **Clique em "Gerar Senha"** e a senha será automaticamente criada com base nos dados inseridos.

---

## 🚀 **Tecnologias Usadas**

- **HTML5** – Estruturação do conteúdo e interface de usuário.
- **JavaScript** – Lógica para a geração e verificação das senhas.
- **CSS** – Estilização básica da interface.

---

## 📋 **Exemplo de Senha Gerada**

Aqui está um exemplo de como a senha gerada pode ficar:

- **Entrada**: País = Brasil, Estado = São Paulo, Cidade = Campinas, Data de Nascimento = 26/06/2006, Uso = 2
- **Senha Gerada**: `26062031` (baseado em cálculos e dados de entrada).

---

## 🔧 **Como Funciona a Lógica de Geração de Senha**

1. **Dados de Entrada**: O sistema usa o **tamanho dos nomes** dos campos de entrada (como País, Estado e Cidade) e a **Data de Nascimento**.

2. **Cálculos Matemáticos**:
    - **Soma**: O tamanho do nome do país, estado e cidade.
    - **Subtração**: A diferença entre o tamanho do nome do país, estado e cidade.
    - **Últimos Dois Dígitos**: A senha final contém os dois últimos dígitos baseados na soma e subtração.

3. **Validação**: A senha é validada verificando se os últimos dois dígitos correspondem corretamente aos cálculos realizados.

---

## 🛡️ **Segurança**

- **Não armazena dados sensíveis**: O sistema não armazena as informações pessoais, apenas usa os dados para gerar senhas localmente no navegador.
- **Fórmula Personalizada**: A fórmula de criação de senhas é baseada em dados simples e uma lógica matemática básica, garantindo senhas únicas e difíceis de serem adivinhadas sem as entradas corretas.

---

## ⚙️ **Contribuindo**

Se você deseja contribuir com melhorias ou correções, siga os seguintes passos:

1. **Faça um Fork** deste repositório.
2. **Crie uma branch** para a sua melhoria (`git checkout -b minha-melhora`).
3. **Commit suas alterações** (`git commit -am 'Adicionando nova funcionalidade'`).
4. **Push para o repositório** (`git push origin minha-melhora`).
5. **Abra um Pull Request**.

---

## 📑 **Licença**

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📈 **Badges**

![GitHub contributors](https://img.shields.io/github/contributors/seuusuario/SecurePassGen?color=green)
![GitHub issues](https://img.shields.io/github/issues/seuusuario/SecurePassGen)
![GitHub stars](https://img.shields.io/github/stars/seuusuario/SecurePassGen?color=yellow)
