# PassGenGuard - Sistema de Geração de Senhas

**PassGenGuard** é uma ferramenta avançada que gera senhas utilizando uma fórmula ofuscada e complexa. A senha é derivada de dados pessoais (país, estado, cidade, data de nascimento e um valor de uso) combinados com operações matemáticas não-lineares, que incluem exponenciação, logaritmos, funções trigonométricas e arredondamentos. Essa complexidade dificulta a engenharia reversa e aumenta a segurança sem armazenar dados sensíveis.

---

## 🛠️ Como Funciona

O sistema cria senhas com exatamente **12 caracteres** a partir dos seguintes passos:

1. **Entradas**  
   - **País** (ex.: Brasil)  
   - **Estado** (ex.: São Paulo)  
   - **Cidade** (ex.: Campinas)  
   - **Data de Nascimento** (ex.: 2006-06-26)  
   - **Uso** (um número que indica o tipo de uso da senha)

2. **Cálculos Avançados**  
   A senha é gerada através de uma série de operações matemáticas avançadas:  
   - Conversão dos caracteres em códigos numéricos  
   - Aplicação de funções exponenciais, logarítmicas e trigonométricas  
   - Geração de valores ofuscados e variações aleatórias  
   
   O resultado final é transformado em uma senha de 12 dígitos, com partes calculadas de forma a dificultar a compreensão do algoritmo.

3. **Execução Local**  
   Todas as operações são realizadas localmente no navegador, sem armazenamento dos dados inseridos.

---

## 🔐 Funcionalidades

- **Geração de Senhas Ofuscadas:** Cria senhas complexas e difíceis de decifrar a partir de dados simples.
- **Segurança Local:** Não armazena dados sensíveis, garantindo privacidade total.
- **Fórmula Customizável:** A lógica pode ser adaptada conforme as necessidades, mantendo o equilíbrio entre complexidade e desempenho.

---

## 🖥️ Como Usar

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seuusuario/PassGenGuard.git
   cd PassGenGuard
   ```

2. **Abra o arquivo `index.html`**  
   Visualize a interface de geração de senhas em seu navegador.

3. **Preencha os Dados**  
   Insira as informações solicitadas: País, Estado, Cidade, Data de Nascimento e o valor de Uso.

4. **Clique em "Gerar Senha"**  
   A senha será gerada automaticamente com base nos cálculos avançados.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura e interface do usuário.
- **JavaScript:** Lógica para a geração da senha com cálculos complexos.
- **CSS:** Estilização da interface.

---

## 📋 Exemplo de Senha Gerada

- **Entradas:**  
  País: Brasil  
  Estado: São Paulo  
  Cidade: Campinas  
  Data de Nascimento: 2006-06-26  
  Uso: 2

- **Senha Gerada:**  
  Exemplo: `482937164058`  
  *(A senha real varia conforme os dados e os cálculos internos.)*

---

## 🔧 Lógica de Geração

1. **Processamento dos Dados:**  
   Os caracteres dos campos são convertidos em códigos numéricos e manipulados com funções matemáticas avançadas.

2. **Operações Complexas:**  
   São aplicados cálculos envolvendo exponenciação, logaritmos, funções trigonométricas e arredondamentos para produzir um valor final ofuscado.

3. **Formatação Final:**  
   O resultado é combinado com variações aleatórias para formar uma senha com 12 dígitos, garantindo maior segurança.

---

## 🛡️ Segurança

- **Privacidade:**  
  Todas as operações são realizadas localmente; nenhum dado pessoal é armazenado.

- **Complexidade Ofuscada:**  
  A fórmula avançada torna a senha única e muito difícil de ser reproduzida sem os dados corretos.

---

## ⚙️ Contribuindo

Se você deseja contribuir para o PassGenGuard:

1. **Faça um Fork** do repositório.
2. **Crie uma Branch** para sua melhoria:
   ```bash
   git checkout -b minha-melhora
   ```
3. **Commit suas Alterações:**
   ```bash
   git commit -am 'Adicionando nova funcionalidade'
   ```
4. **Envie para o Repositório:**
   ```bash
   git push origin minha-melhora
   ```
5. **Abra um Pull Request.**

---

## 📑 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📈 Badges

![GitHub contributors](https://img.shields.io/github/contributors/seuusuario/PassGenGuard?color=green)  
![GitHub issues](https://img.shields.io/github/issues/seuusuario/PassGenGuard)  
![GitHub stars](https://img.shields.io/github/stars/seuusuario/PassGenGuard?color=yellow)
