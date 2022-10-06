from django.shortcuts import render


def index(request):
    data = {"title": "Main page"}
    return render(request, "pages/index.html", context=data)


def about_us(request):
    data = {"title": "About us"}
    return render(request, 'pages/about_us.html', context=data)


def partners(request):
    data = {"title": "Partners"}
    return render(request, 'pages/partners.html', context=data)
