
# FFXI PlayOnline Proxy

The FFXI PlayOnline Proxy is a simple way to bypass the annoying PlayOnline loading that has to happen before the game launches. This does not bypass POL or send anything off to 3rd party servers, it's completely self-contained and runs on your PC.

Instead of reachingout out to the PlayOnline servers and getting the PML files from their server, we serving our own page directly from your PC. This page loads you directly into the game as soon as it loads. 

You can see how it works by checking out the video here. https://www.youtube.com/watch?v=SATgkzxw_ss


## Setup
In order to bypass the login process, you need to modify your hosts file on Windows. This file is located at `C:\Windows\system32\drivers\etc\`. Follow these steps to modify it.
    
1) Press Windows key, type notepad, right-click on it, and then select "Run as administrator".
2) Select File->Open in notepad, and paste `C:\Windows\system32\drivers\etc\hosts` in the File name path, and press enter.
3) Add a new entry of `127.0.0.1	wh000.pol.com` on a new line at the end of the file.
4) Save
####
Once done with that, you'll need to download and run the POLProxy application. This will serve the page that will load you directly into the game.

1) Download [POLProxy](https://github.com/jaku/POL-Proxy/releases/download/1.0.0/PolProxy.exe)
2) Run the application, it will open a new window with the output of `POL Proxy is running on port 51304`.
####

Note, that modifying this file, and not running the FFXI POL Proxy will prevent you from being able to connect to POL. If you no longer wish to use the POLProxy, just open the hosts file like before, and remove the line you added.


## Other

That should be about it, if you have any issues let me know but this should be fairly clear. Again, remember to have the application running before logging into POL, you can technically close the program after logging in, but it uses little resources.
## License

[MIT](https://choosealicense.com/licenses/mit/)

