This Cryptocurrency Paper Wallet Generator is an open-source software under the MIT License.



<strong>INSTALLATION GUIDELINE
</strong>


<strong>[ For Personal Use ]
</strong>
If you are not hosting this web files on any server & would like to use the software on your local computer, simply follow the steps below.

1. Unzip the .zip file
2. Drag & drop the index.html file onto your browser
3. Generate wallet accordingly 



<strong>[For Web Hosting]
</strong>
1. Upload the .zip file on your web server via FTP or SFTP (File Manager on Cpanel)
2. Unzip the files on the directory you wish to serve your users
3. Make sure to change the images available on /images/ folder to rebrand the software
4. Enter your website's URL followed by index.html. (e.g. mypaperwallet.com/index.html)


<strong>[Why would anyone use it for personal use?]</strong>
If you are willing to create the most secure cryptocurrency wallet, it is best advised that you load the script in an offline environment.


<strong>[How does it still generate a wallet even if the internet isn't connected?]</strong>
Cryptocurrencies are made up of encrypted computer codes & thus, you don't necessarily require an internet to be connected to generate
a new address which is readable by cryptocurrency blockchains. 


<strong>[How can I set donation addresses?]</strong>
1. Open index.html
2. Search (ctrl+f) the line: janin.currencies = [
3. Below the "janin.currencies = [" line, you will see all coins available. 
4. Fill in your coin address on the last part
EXAMPLE:
janin.currency.createCurrency ("2GIVE",               0x27, 0xa7, "6",    "R"    , "THIS PART IS WHERE YOUR ADDRESS SHOULD BE"),
Do that for all the currencies listed there & save the file.
5. Open src folder 
6. Open janin.currency.js
7. Repeat & save


<strong>[How can I delete currencies?]</strong>
To delete existing currencies, all you have to do is to delete the currency on index.html and src>janin.currency.js.
1. Open index.html
2. Search (ctrl+f) the line: janin.currencies = [
3. Simply delete the whole code for currency you wish to delete
EXAMPLE:
janin.currency.createCurrency ("2GIVE",               0x27, 0xa7, "6",    "R"    , ""),
4. Open janin.currency.js in the SRC folder
5. Repeat & save


<strong>[How can I add new currencies?]</strong>
First of all, the currency must operate on similar algo/blockchain with the already added currencies.

The following info is required:
name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start

These can be gathered from communities or you can search on your own by looking through the coin's source code.

If you don't know the coin's source code, then follow the steps below:

Each currency use a specific prefix in both public address and WIF private key as a marker of validity of the address. 
We need to find them to generate valid wallet for your currency. 
You could find those directly in the source code of software wallet, but it's easier to extract them from actual addresses. 
If you are curious, you can find more details here: https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses

1. Download and run a wallet software for your currency
2. Copy a public address (usually in the "receive" tab)
3. Open the index.html file on your local browser OR go to your website which is hosting the paper wallet
4. Run the following command (press F12 or right click->console) with the address you just copied: 
"0x"+Bitcoin.Address.decodeString('YOURCOINADDRESS')[0].toString(16) 

You should get a hexadecimal number like 0x1e. This is the network version.

If you get an error, you can try 
Bitcoin.Address.decodeString('YOURCOINADDRESS').slice(0, -20).map(x => "0x"+ x.toString(16)). 

Some currencies like ZCash use two number instead of one. In this case you should use both number like this:[0x1c,0xb8]. 
If you still have an error there is probably some changes in the address format and we can't support that coin.

Now, we will need a private key in Wallet Import Format (WIF). 
Go to your software wallet and find the console (usually in the Debug window). 
Now run the following command with your own public address: 
dumpprivkey YOURCOINADDRESS 
This is you private key.
Go back to the javascript console on the website and run the following command with your private key: 
"0x"+Bitcoin.Base58.decode("YOURCOINADDRESS")[0].toString(16) 
This is the private key prefix. Again, an error means "won't support".

Step two: Find a good logo
Find a good logo for your coin and resize it to 300x300 pixels. 
Save it as a PNG file and copy it in the logos directory. 
It's filename should be currency.png, all lowercase (ex: dogecoin.png).

Step three: Choose a design
There is already a bunch of design variation in the wallets directory. 
Choose one and copy it with the same name as the logo file. 
You can also go for your own design.

Step four: Assemble the pieces
You can now edit the src/janin.currency.js file and add your currency in the janin.currencies array at the end of the file, 
in the good alphabetical position: janin.currency.createCurrency ("MyAwesomeCurrency",0x1e, 0x9e, "", "" , ""),

The first parameter is the name of your currency (it should be the same as the filenames you used, but capitalized as you like). 
The second parameter is the network version you found earlier. 
The third parameter is the private key prefix you found earlier.
Let the other parameters blank for now.

You now need to build the website. If you have grunt (http://gruntjs.com/) installed, you can just run the grunt command. 
Otherwise, you can copy your code line directly in the root index.html file in the same position (beware, it's a big file, find your way with Ctrl+F "createCurrency").

Step five: Find the two other values.
If you reload the website, you should already see your currency as supported and generate wallet, 
but we need to find the parameters 3 and 4. They are the first letter of a WIF address in classic and compressed format.

Go the Bulk wallet tab and generate a series (at least 100) of classic addresses (don't check "Compressed addresses?").
Look at the first letter of the generated private keys (third column). If it's always the same letter, this is your third parameter (ex: "6"). If there is two different letter, enclose them in brackets (ex: "[LK]"). This is case sensitive.
Do the same after checking "Compressed addresses?". This is the fourth parameter.
Complete your two lines of code in src/janin.currency.js and index.html with those values.

Step six: The donation address
The last parameter is the donation address for this currency. 


Step seven: Test that
To validate all that, we need to check that everything went fine and that generated addresses are correctly imported in a software wallet.

Generate a couple of public address and private key in your new website.

Go to the console of your software wallet and run the following command with your new private key: 
importprivkey YOURPRIVATEKEY

Check in the UI that the corresponding public address appears correctly

Repeat that with a few addresses. If no error appears and all addresses match, all is well, nicely done !
