main()

function main()
{
    const dateTime = new Date()

    sayHello(dateTime);
    dayMessage(dateTime)
}

function sayHello(dateTime)
{
    const time = dateTime.getHours();
    const weather = "chuvoso";

    let message = '';
    if (time < 12)
    {
        message = 'Bom dia...';
        if (weather == 'chuvoso')
            console.log('Está chovendo, leve o guarda-chuva');
    }
    message = (time >= 12 && time < 18) ? 'Boa tarde...' : 'Boa noite';

    console.log(message);
    //alert(message);
}

function dayMessage(dateTime)
{
    const weekDay = dateTime.getDay();

    let message = '';
    switch (weekDay)
    {
        case 0x00:
            message = 'Domingo de descanço merecido';
            break;

        case 0x01:
            message = 'Começou mais uma semana';
            break;

        case 0x02:
            message = 'Ainda vai demorar o fim de semana';
            break;

        case 0x03:
            message = 'Metade da semana';
            break;

        case 0x04:
            message = 'Quase la';
            break;

        case 0x05:
            message = 'Del Rey Ligado...';
            break;

        case 0x06:
            message = 'Sabadou';
            break;
    }

    console.log(message);
    //alert(message);
}

