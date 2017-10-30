#include "CalliopeSettings.h"
#include "MicroBit.h"
#include "nrf_delay.h"
#include "nrf_gpio.h"




#ifdef CALLIOPE_SCROLL_TEST

MicroBit uBit;

int main() {
    uBit.init();
    uBit.display.scroll("Cpp WORKS!");
}

#endif