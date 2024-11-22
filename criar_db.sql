CREATE TABLE Usuarios (
    ID_Usuario SERIAL PRIMARY KEY, 
    Nome VARCHAR(100) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Restaurantes (
    ID_Restaurante VARCHAR(14) PRIMARY KEY, -- CNPJ no formato String (14 caracteres sem formatação)
    CEP VARCHAR(10) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    ID_Usuario INT NOT NULL,
    CONSTRAINT fk_restaurante_usuario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario) ON DELETE CASCADE
);

CREATE TABLE Avaliacoes (
    ID_Avaliacao SERIAL PRIMARY KEY,
    Descricao TEXT NOT NULL,
    Nota INT CHECK (Nota BETWEEN 1 AND 5), -- Validação para a nota entre 1 e 5
    ID_Usuario INT NOT NULL,
    ID_Restaurante VARCHAR(14) NOT NULL,
    CONSTRAINT fk_avaliacao_usuario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    CONSTRAINT fk_avaliacao_restaurante FOREIGN KEY (ID_Restaurante) REFERENCES Restaurantes(ID_Restaurante) ON DELETE CASCADE
);

CREATE TABLE Menus (
    ID_Menu SERIAL PRIMARY KEY,
    ID_Restaurante VARCHAR(14) NOT NULL,
    Descricao_Menu TEXT NOT NULL,
    ID_Usuario INT NOT NULL,
    CONSTRAINT fk_menu_restaurante FOREIGN KEY (ID_Restaurante) REFERENCES Restaurantes(ID_Restaurante) ON DELETE CASCADE,
    CONSTRAINT fk_menu_usuario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Secoes (
    ID_Usuario INT PRIMARY KEY,
    Token VARCHAR(255) NOT NULL,
    CONSTRAINT fk_secoes_usuario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario) ON DELETE CASCADE
);
