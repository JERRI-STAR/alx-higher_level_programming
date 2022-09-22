#!/usr/bin/python3
# File: 4-hidden_discovery.py.
# Name: Jeremiah Ike. Obuseri.
import hidden_4

if __name__ == '__main__':
    for name in dir(hidden_4):
        if name.startswith('_'):
            continue
        print(name)
