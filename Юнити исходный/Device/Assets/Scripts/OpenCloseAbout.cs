using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OpenCloseAbout : MonoBehaviour
{
    public GameObject About;
    public static int clicks = 0;

    public void PlayNow()
    {
        if (clicks % 2 == 0)
        {
            About.SetActive(true);
            clicks++;
        }
        else
        {
            About.SetActive(false);
            clicks--;
        }

    }

}
