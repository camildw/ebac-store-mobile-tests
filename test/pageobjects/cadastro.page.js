class cadastroHome {
    get signUpButton() { 
        return $('android=new UiSelector().text("Sign up")'); 
    }
    get primeiroNome() { 
        return $('id=firstName'); 
    }
    get sobrenome() { 
        return $('id=lastName'); 
    }
    get telefone() { 
        return $('id=phone'); 
    }
    get email() { 
        return $('id=email'); 
    }
    get senha() { 
        return $('id=password'); 
    }
    get redSenha() { 
        return $('id=repassword'); 
    }
    get botaoCriar() { 
        return $('android=new UiSelector().text("Create")'); 
    }
    get mensagemDeSucesso() { 
        return $('android=new UiSelector().textContains("Olá Fulano")'); 
    }

    async registroCompleto(novoUsuario) {
        await this.primeiroNome.setValue(novoUsuario.primeiroNome);
        await this.sobrenome.setValue(novoUsuario.sobrenome);
        await this.telefone.setValue(novoUsuario.telefone);
        await this.email.setValue(novoUsuario.email);
        await this.senha.setValue(novoUsuario.senha);
        await this.redSenha.setValue(novoUsuario.redSenha);
        await this.botaoCriar.click();
    }
}

export default new cadastroHome();