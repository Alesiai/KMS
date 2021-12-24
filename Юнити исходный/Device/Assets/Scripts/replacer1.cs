using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class replacer1 : MonoBehaviour
{
    public Text TaskText;
    public GameObject TaskPanel;

    public GameObject Face;
    public GameObject Scales;
    public GameObject Device;
    public GameObject Bridge;
    public GameObject Play;

    bool move = false;
    Vector3 startPosition;
    Vector3 needPosition;
    float speed = 0.04f;
    float offset = 0;
    Quaternion startRotation;
    Quaternion needRotaton;


    public void PlayMove()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Play.transform.position;
            needRotaton = Play.transform.rotation;
        }

    }

    public void Move()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Device.transform.position;
            needRotaton =  Device.transform.rotation;
            TaskText.text = "";
            TaskPanel.SetActive(false);
        }

    }

    public void Move1()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Face.transform.position;
            needRotaton = Face.transform.rotation;
            TaskText.text = "Мультирезистор, создает сопроивление цепи";
            TaskPanel.SetActive(true);
        }

    }
    public void MoveToBridge()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Bridge.transform.position;
            needRotaton = Bridge.transform.rotation;
            TaskText.text = "Гальванометр (мост Киргоффа) - показывает уравновешенность сопротивлений цепи ";
            TaskPanel.SetActive(true);
        }

    }
    public void Move0()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Scales.transform.position;
            needRotaton = Scales.transform.rotation;
            TaskText.text = "Мультирезистор - позволяет изменять сопротивление цепи от 0.01 до 100000 Ом";
            TaskPanel.SetActive(true);
        }

    }


    void FixedUpdate()
    {

        if (move)
        {
            offset += speed;
            transform.position = Vector3.Lerp(startPosition, needPosition, offset);
            transform.rotation = Quaternion.Lerp(startRotation, needRotaton, offset);

            if (offset >= 1)
            {
                move = false;
                offset = 0;
            }
        }
    }
}


