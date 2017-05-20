## Setup Instructions

1. Setup Serverless for deploying lambda functions
```
> npm install serverless -g
```

2. Configure AWS credentials for Serverless deployment. Instructions [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

3. Clone repo
```
> git clone git@github.com:n4nagappan/recharge-bot.git
> cd recharge-bot
```

4. Rename the sample_config.json file to config.json. 
```
> mv sample_config.json config.json
```

5. Modify the config.json to include your phone number and pay2all client id.
You can get your pay2all client id [here](http://www.pay2all.in/).

6. Deploy service
```
> serverless deploy -s prod
```

![deploy image](https://cloud.githubusercontent.com/assets/1703029/26273769/13d79202-3d55-11e7-9908-4107ab074b99.png)

7. Test request
```
curl --data 'sender=919444944400' https://mokdggyz4a.execute-api.us-east-1.amazonaws.com/prod/recharge
```

## Setting up external accounts
### Textlocal account
1. Setup textlocal account [here](https://www.textlocal.in/)
2. Configure an inbox to send HTTP post request to your lambda service when an SMS is received. You can do that under the "Forward incoming messages to a URL" section inside settings. 

### Pay2All account 
1. Setup Pay2All account [here](http://www.pay2all.in/)
2. Top-up your account with some money for recharging.
