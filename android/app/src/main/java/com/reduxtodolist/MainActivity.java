package com.reduxtodolist;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.KeyEvent;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import java.util.Locale;

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

    private static final int WINDOW_PERMISSION_REQUEST = 1234;
    private static final String LOG_TAG = MainActivity.class.getName();

    private ReactInstanceManager reactInstanceManager;
    private ReactRootView reactRootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Request permission for React to launch a window overlay.
        // This permission is only needed for debug builds running Marshmallow and above.
        if (BuildConfig.DEBUG && Build.VERSION.SDK_INT >= Build.VERSION_CODES.M &&
                !Settings.canDrawOverlays(this)) {
            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                    Uri.parse("package:" + getPackageName()));
            startActivityForResult(intent, WINDOW_PERMISSION_REQUEST);
        } else {
            loadReactView();
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode) {
            case WINDOW_PERMISSION_REQUEST:
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M
                        && Settings.canDrawOverlays(this)) {
                    loadReactView();
                    break;
                }

            default:
                Log.i(LOG_TAG, String.format(
                        Locale.US,
                        "Unhandled activity result (%d) for request (%d)",
                        resultCode,
                        requestCode));
                break;
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && reactInstanceManager != null) {
            reactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public void onBackPressed() {
        if (reactInstanceManager != null) {
            reactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (reactInstanceManager != null) {
            reactInstanceManager.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (reactInstanceManager != null) {
            reactInstanceManager.onResume(this, this);
        }
    }

    /**
     * Loads the React Native view. <p>
     *
     * NOTE: This should only be done if the phone has permission to overlay windows, otherwise
     * this will crash when in debug mode.
     */
    private void loadReactView() {
        reactRootView = new ReactRootView(this);

        reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        reactRootView.startReactApplication(reactInstanceManager, "reduxtodolist", null);

        setContentView(reactRootView);
    }
}
