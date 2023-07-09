
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

Note, that modify this file, and not running the FFXI POL Proxy will prevent your client from being able to connect. So if you want to revert, just follow the same steps as above, but remove the line you added.

Run POL-Proxy, it should open a new window with the output of `POL Proxy is running on port 51304`.

## Other

That should be about it, if you have any issues let me know but this should be fairly clear. Again, remember to have the application running before logging into POL, you can technically close the program after logging in, but it uses little resources.
## License

[MIT](https://choosealicense.com/licenses/mit/)

