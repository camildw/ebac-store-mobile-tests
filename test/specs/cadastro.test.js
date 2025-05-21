import homePage from '../pageobjects/home.page';
import cadastroHome from '../pageobjects/cadastro.page';
import profilePage from '../pageobjects/profile.page';

/*describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })
})*/

//implementar teste para cadastrar novo usuario

describe('Fluxo de cadastro de cliente', () => {
    it('Deve cadastrar um novo usuário com sucesso', async () => {
        // Informações do Usuário
        const novoUsuario = {
            primeiroNome: 'Fulano',
            sobrenome: 'Detal',
            telefone: '11987654321',
            email: `fulado.detal01@ebac.com`,
            senha: 'Teste@1234'
        };

        // Fluxo de cadastro
        await homePage.openMenu('profile');
        await cadastroHome.signUpButton.click();
        await cadastroHome.registroCompleto(novoUsuario);
        
        // Validação
        await expect(cadastroHome.mensagemDeSucesso).toBeDisplayed();
        await cadastroHome.mensagemDeSucesso.waitForDisplayed({ timeout: 10000 });
        
    });
});