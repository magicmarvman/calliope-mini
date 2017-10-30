#include "CalliopeSettings.h"
#include "MicroBit.h"
#include "nrf_delay.h"
#include "nrf_gpio.h"

#ifdef CALLIOPE_TEST_SMILEY

MicroBit uBit;


int main() {
    uBit.init();
    MicroBitImage smiley("0,255,0,255, 0\n0,255,0,255,0\n0,0,0,0,0\n255,0,0,0,255\n0,255,255,255,0\n");
    while(1)
    {
        for (int y=4; y >= 0; y--)
        {
            uBit.display.image.paste(smiley,0,y);
            uBit.sleep(500);
        }
        uBit.sleep(3000);
        uBit.display.clear();

    }
    
}


#endif