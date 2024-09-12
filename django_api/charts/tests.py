# src/charts/tests/test_views.py

from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status

class ChartAPITests(APITestCase):
    def test_get_candlestick_data(self):
        url = reverse('candlestick-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("data", response.data)

    def test_get_line_chart_data(self):
        url = reverse('line-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("labels", response.data)

    def test_get_bar_chart_data(self):
        url = reverse('bar-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("labels", response.data)

    def test_get_pie_chart_data(self):
        url = reverse('pie-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("labels", response.data)
