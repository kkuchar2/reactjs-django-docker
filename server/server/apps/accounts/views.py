from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_auth.views import LoginView


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class CustomLoginView(LoginView):
    def get_response(self):
        orginal_response = super().get_response()
        mydata = {"message": "some message", "status": "success"}
        orginal_response.data.update(mydata)
        return orginal_response
